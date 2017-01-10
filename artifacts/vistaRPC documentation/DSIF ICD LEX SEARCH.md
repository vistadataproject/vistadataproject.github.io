---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF ICD LEX SEARCH 

 property | value 
--- | --- 
 label | DSIF ICD LEX SEARCH
 tag | LEXSRCH
 routine | [DSIFICD](http://code.osehra.org/dox/Routine_DSIFICD_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns the ICD-10-CM category and code results of a searchbased upon a description or code value. The return is designed for displayin a tree view control.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DSIFVAL | LITERAL |  | true | This is the description or code you wish to search for, with a 2 character minimum. This input is required. | 
| vs:Input_Parameter-8994_02 | DSIFDT | LITERAL |  |  | This is the date you wish to check for codes. This input is not required, but if not passed in it defaults to today. | 
| vs:Input_Parameter-8994_02 | DSIFLL | LITERAL |  |  | This is the maximum length of the list you wish to be returned. The default value is 30 if nothing is passed in. | 
| vs:Input_Parameter-8994_02 | DSIFF | LITERAL |  |  | This is the Coding System View you wish to retrieve, the default is 10D (ICD-10-CM) if nothing is passed in. | 