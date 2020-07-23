![alt text](https://github.com/JKannekens/kontent-custom-element-formsite/blob/master/FormsiteFormSelector.gif "Formsite Form Selector")

# Formsite form selector for Kentico Kontent
This repository contains the source code of Formsite form selector custom element for Kentico Kontent. Created by <a href="https://www.truelime.nl/">TrueLime</a>

## Setup
1. Deploy the code to a secure public host
2. Follow the instructions in the Kentico Kontent documentation to add the element to a content model.
3. Configure the JSON parameters as detailed in the JSON Parameters section
## JSON Parameters
```
{
    "apiEndpoint": "<YOUR API ENDPOINT>",
    "apiKey": "<YOUR API KEY>"
}
```
## Response
After selecting a form from Formsite these are returned in an array of assets.
For more information see: https://support.formsite.com/hc/en-us/articles/360000288594-API
```
{
    "forms": [
        {
            "description": "Internal description...",
            "directory": "form123",
            "name": "Customer Survey",
            "publish": {
                "embed_code": "<script>...</script>",
                "link": "https://fs1.formsite.com/example/form123/index.html"
            },
            "state": "open",
            "stats": {
                "filesSize": 0,
                "resultsCount": 100
            }
        }
    ]
}
```
## Deploying
Netlify has made this easy. If you click the deploy button below, it will guide you through the process of deploying it to Netlify and leave you with a copy of the repository in your GitHub account as well.
<br>
<br>
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/JKannekens/kontent-custom-element-formsite" rel="nofollow"><img src="https://camo.githubusercontent.com/be2eb66bb727e25655f1dcff88c2fdca82a77513/68747470733a2f2f7777772e6e65746c6966792e636f6d2f696d672f6465706c6f792f627574746f6e2e737667" alt="Deploy to Netlify" data-canonical-src="https://www.netlify.com/img/deploy/button.svg" style="max-width:100%;"></a>
