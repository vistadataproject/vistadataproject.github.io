---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG CPRS RAD EXAM 

 property | value 
--- | --- 
 label | MAGG CPRS RAD EXAM
 tag | IMAGEC
 routine | [MAGGTRAI](http://code.osehra.org/dox/Routine_MAGGTRAI_source.html)
 return value type | ARRAY
 description | Returns a list of Images for the Radiology Exam selected in CPRS.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 245 | true | This is the Data that CPRS sends Imaging, in the windows messaging format.i.e. VISTA Messaging between applications.example : 'RPT^CPRS^29027^RA^i79029185.9998-1' | 




 ###### Generated on January 11th 2017, 6:39:42 am