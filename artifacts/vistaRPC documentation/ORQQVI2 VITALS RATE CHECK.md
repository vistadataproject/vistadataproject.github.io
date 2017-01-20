---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQVI2 VITALS RATE CHECK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQVI2 VITALS RATE CHECK{:/}
 tag | {::nomarkdown}RATECHK{:/}
 routine | [ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | RATECHK^[ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html)
 Input parameters | {::nomarkdown}ORQTYPE, ORQRATE, ORQUNIT{:/}
 First comment | {::nomarkdown}<pre> Extrinsic function to validate the<br/> rate for a particular measurement<br/>   Input<br/>   Variables:  ORQTYPE=Type of measurement (abbreviation<br/>               (req.)  from PCE Device Interface Specification).<br/>               ORQRATE=Measurement rate to be validated.<br/>               (req.)<br/>               ORQUNIT=Unit of measurement for rate, if specified.<br/>               (opt.)<br/>   Return value:  1 if rate is valid.<br/>                  0 if rate is invalid.<br/></pre>{:/}
 Code | {::nomarkdown}  S ORRETURN=$$RATECHK^GMRVPCE0(ORQTYPE,ORQRATE,$G(ORQUNIT)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Vitals/rVitals.pas">Vitals/rVitals.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}