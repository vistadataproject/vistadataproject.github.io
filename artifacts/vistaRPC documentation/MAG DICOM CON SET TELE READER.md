---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM CON SET TELE READER 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM CON SET TELE READER{:/}
 tag | {::nomarkdown}SETREAD{:/}
 routine | [MAGDTR06](http://code.osehra.org/dox/Routine_MAGDTR06_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This allows the user to select/deselect an item from his/her siteand specialty list.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SELECT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}User selection preference - 1=select, 0=ignore{:/} | 
| {::nomarkdown}IENPARAM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to User Parameter file 2006.5843{:/} | 




 Generated on January 13th 2017, 6:15:57 am