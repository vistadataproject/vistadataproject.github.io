---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQCN ISPROSVC 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN ISPROSVC{:/}
 tag | {::nomarkdown}ISPROSVC{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}RPC will return 1 or 0 if the supplied file entry from 123.5 is marked as part of the Consults-Prosthetics interface.  This RPC is used to disable the Earliest Appropriate Date field and value when ordering Prosthetics requests via CPRS GUI.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ISPROSVC^[ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 Method comment | IS THIS SERVICE PART OF CONSULTS-PROSTHETICS INTERFACE, wat/OR*3*280
 First comment | {::nomarkdown}GMRCIEN - IEN of selected service{:/}
 Input parameters | {::nomarkdown}GMRCIEN{:/}
 Code | ```  I $G(^GMR(123.5,$G(GMRCIEN),"INT"))=1 S ORY=1```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}