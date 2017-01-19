---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG IMAGE CURRENT INFO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG IMAGE CURRENT INFO{:/}
 tag | {::nomarkdown}INFO{:/}
 routine | [MAGDQR04](http://code.osehra.org/dox/Routine_MAGDQR04_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure returns current values for the variousDICOM tags that are to be included in the header of an exportedimage.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IMAGE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a number. This number is a pointerinto the Image File (#2005).This RPC will return information for the image that is identifiedby this pointer-value.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}