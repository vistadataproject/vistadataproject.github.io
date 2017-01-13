---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN ISPROSVC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN ISPROSVC{:/}
 tag | {::nomarkdown}ISPROSVC{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}RPC will return 1 or 0 if the supplied file entry from 123.5 is marked as part of the Consults-Prosthetics interface.  This RPC is used to disable the Earliest Appropriate Date field and value when ordering Prosthetics requests via CPRS GUI.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | IS THIS SERVICE PART OF CONSULTS-PROSTHETICS INTERFACE, wat/OR*3*280
 Input Parameters | {::nomarkdown}GMRCIEN{:/}
 Lines | ```{::nomarkdown} I $G(^GMR(123.5,$G(GMRCIEN),"INT"))=1 S ORY=1```{:/}
 Leading comment lines | {::nomarkdown}GMRCIEN - IEN of selected service{:/}




 Generated on January 13th 2017, 7:11:27 am