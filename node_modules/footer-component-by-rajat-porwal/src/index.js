export function addFooter() {
   
    var footer = document.createElement('footer');
    var paragraph = document.createElement('p');
    var text1 = document.createElement('span');
    text1.textContent = 'Built by ';
    
    var profileLinkText = document.createElement('a');
    profileLinkText.textContent = 'Rajat Porwal';
    profileLinkText.href = 'https://github.com/rajat-porwal';
    
    var text2 = document.createElement('span');
    text2.textContent = ' | ';
    
    var linkedinLink = document.createElement('span');
    var sourceCodeAnchor = document.createElement('a');
    sourceCodeAnchor.textContent = 'LinkedIn';
    sourceCodeAnchor.href = 'https://www.linkedin.com/in/rajatporwal/';

    linkedinLink.appendChild(sourceCodeAnchor);
    paragraph.appendChild(text1);
    paragraph.appendChild(profileLinkText);
    paragraph.appendChild(text2);
    paragraph.appendChild(linkedinLink);
    footer.appendChild(paragraph);
   
    document.body.appendChild(footer);

    var style = document.createElement('style');
    style.textContent = `
        footer {
            background-color: #2c3e50; 
            color: #ffffff; 
            padding: 20px; 
            text-align: center;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); 
            transition: background-color 0.3s ease; 
        }
        
        footer p {
            margin: 0;
        }
        
        footer a {
            margin-left: 3px;
            margin-right: 3px;
            color: #3498db; 
            text-decoration: none;
            transition: color 0.3s ease; 
        }
        
        footer a:hover {
            color: #2980b9; 
            text-decoration: underline;
        }
    
    `;
    document.head.appendChild(style);
}