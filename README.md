# RegExp-FindTag
Javascript function using regular expresion to get an element by tagname.
## Example
```
const string = 
`<h1>Title</h1>
<script src="script.js"></script>
<p>So, this is a text.</p>
<script>alert('<asd></asd>');</script>`;

console.log(string.replace(FindTag('script'),
`Tag:$1
Attr:$2
HTML:$3`));
```
