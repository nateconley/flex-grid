#Flex-Grid

Flex-Grid is meant to be a very simple flexbox based CSS grid framework. It is meant to be very lightweight and easy to use.

Please be careful using this in production, as IE has limited support and there is no fallback. Please visit [Can I Use](http://caniuse.com/#search=flex) for more information.

Like many other frameworks, this uses a twelve column grid. 

Flex-Grid also makes it incredibly easy to change the defaults, such as max-width and margins.

##Basic Usage

Wrap your Flex-Grid in the container class: ```<div class="container">```

For each row: ```<div class="row">```

Columns one through twelve: ```<div class="col one">```

##Responsive Helper Classes

Much like Bootstrap, Flex-Grid offers helpful classes. 

|                  | **Extra Small Devices** | **Small Devices** | **Medium Devices** | **Large Devices**   |
| ---------------- | ----------------------- | ----------------- | ------------------ | ------------------- |
|                  | Phones(<768px)          | Tablets (>=768px) | Desktops (>=992px) | Desktops (>=1200px) |
| ```visible-xs``` | **Visible**             | Hidden            | Hidden             | Hidden              |
| ```visible-sm``` | Hidden                  | **Visible**       | Hidden             | Hidden              |
| ```visible-md``` | Hidden                  | Hidden            | **Visible**        | Hidden              |
| ```visible-lg``` | Hideen                  | Hidden            | Hidden             | **Visible**         |
| ```hidden-xs```  | Hidden                  | **Visible**       | **Visible**        | **Visible**         |
| ```hidden-sm```  | **Visible**             | Hidden            | **Visible**        | **Visible**         |
| ```hidden-md```  | **Visible**             | **Visible**       | Hidden             | **Visible**         |
| ```hidden-ls```  | **Visible**             | **Visible**       | **Visible**        | Hidden              |


**Please Note:** These classes default to ```display: block``` when visible


**To-Do:**
Make standard columns responsive