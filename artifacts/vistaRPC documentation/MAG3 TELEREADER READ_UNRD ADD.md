---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG3 TELEREADER READ_UNRD ADD 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG3 TELEREADER READ_UNRD ADD{:/}
 tag | {::nomarkdown}FILE{:/}
 routine | [MAGNGMR](http://code.osehra.org/dox/Routine_MAGNGMR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Add a consult and image pointers toUnread/Read List file (#2006.5849)and DICOM GMRC TEMP LIST file (#2006.5839){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGDA{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}An image IEN in IMAGE file (#2005) - ^MAG(2005,MAGDA){:/} | 
| {::nomarkdown}MAGCNT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Count of new images captured{:/} | 
| {::nomarkdown}MAGRIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}a request/consult IEN in REQUEST/CONSULTATION file (#123){:/} | 




 Generated on January 13th 2017, 6:15:57 am