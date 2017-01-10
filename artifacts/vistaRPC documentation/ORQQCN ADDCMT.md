---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN ADDCMT 

 property | value 
--- | --- 
 label | ORQQCN ADDCMT
 tag | CMT
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | SINGLE VALUE
 description | Allows addition of a comment to a consult request/consult without changingits status. Optionally, allows sending of an alert to the requestingprovider and others.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | Consult ID | LITERAL | 16 | true | Internal entry number of the consult in file 123, REQUEST/CONSULT. | 
| vs:Input_Parameter-8994_02 | Comments | LIST | 80 | true | Array of comments in the form ARRAY(0)..ARRAY(n). | 
| vs:Input_Parameter-8994_02 | Alert | LITERAL | 5 | true | If '1', send an alert to the requesting provider.  Otherwise, don't. | 
| vs:Input_Parameter-8994_02 | Alert to | LITERAL | 80 | true | Contains pointers to NEW PERSON FILE (200) for those to receive alert forthis addition of a comment.  | 