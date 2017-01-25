---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN ISPROSVC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN ISPROSVC{:/}
 tag | {::nomarkdown}ISPROSVC{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}RPC will return 1 or 0 if the supplied file entry from 123.5 is marked as part of the Consults-Prosthetics interface.  This RPC is used to disable the Earliest Appropriate Date field and value when ordering Prosthetics requests via CPRS GUI.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ISPROSVC^[ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 Method comment | IS THIS SERVICE PART OF CONSULTS-PROSTHETICS INTERFACE, wat/OR*3*280
 Input parameters | {::nomarkdown}GMRCIEN{:/}
 First comment | {::nomarkdown}<pre>GMRCIEN - IEN of selected service</pre>{:/}
 Code | {::nomarkdown}  I $G(^GMR(123.5,$G(GMRCIEN),"INT"))=1 S ORY=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}