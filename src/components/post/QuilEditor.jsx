import React, { useMemo, useCallback, memo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import uploadImage from '../../apis/api/image';

const QuillEditor = memo(({ quillRef, htmlContent, setHtmlContent }) => {
    const imageHandler = useCallback(async () => {
        const formData = new FormData();

        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.setAttribute("name", "image");
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            formData.append("image", file);

            try {
                const res = await uploadImage(formData);
                if (!res.success) {
                    alert("이미지 업로드에 실패하였습니다.");
                    return;
                }
                const url = res.payload.url;
                const quill = quillRef.current.getEditor();

                const range = quill.getSelection()?.index;
                if (typeof range !== "number") return;

                quill.setSelection(range, 1);
                quill.clipboard.dangerouslyPasteHTML(range, `<img src=${url} alt="image" />`);
            } catch (error) {
                console.error("Error uploading image:", error);
                alert("이미지 업로드 중 오류가 발생했습니다.");
            }
        };
    }, [quillRef]);

    const modules = useMemo(() => ({
        toolbar: {
            container: [
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ size: ["small", false, "large", "huge"] }, { color: [] }],
                [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                    { align: [] },
                ],
                ["image", "video"],
            ],
            handlers: {
                image: imageHandler,
            },
        },
    }), [imageHandler]);

    return (
        <>
            <ReactQuill
                ref={quillRef}
                value={htmlContent}
                onChange={setHtmlContent}
                modules={modules}
                theme="snow"
            />
        </>
    );
});

export default QuillEditor;
