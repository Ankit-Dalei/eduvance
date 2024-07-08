// src/components/GlobalEditor.js
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const GlobalEditor = ({ initialValue, onEditorChange, height, menubar, plugins, toolbar, contentStyle }) => {
  const editorRef = useRef(null);

  return (
    <Editor
      apiKey="695bhx4ub7gr6sm0dpjrx7dp4copd1epv0m1oopvn61co8m3"
      onInit={(_evt, editor) => (editorRef.current = editor)}
      initialValue={initialValue}
      init={{
        height: height || 300,
        menubar: menubar || false,
        plugins: plugins || [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount',
        ],
        toolbar: toolbar || 'undo redo | blocks | ' +
          'bold italic forecolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
        content_style: contentStyle || 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
      }}
      onEditorChange={onEditorChange}
    />
  );
};

export default GlobalEditor;
