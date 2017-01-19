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

 property | value 
 --- | --- 
 Method | RATECHK^[ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html)
 First comment | {::nomarkdown}<pre> Extrinsic function to validate the<br/> rate for a particular measurement<br/>   Input<br/>   Variables:  ORQTYPE=Type of measurement (abbreviation<br/>               (req.)  from PCE Device Interface Specification).<br/>               ORQRATE=Measurement rate to be validated.<br/>               (req.)<br/>               ORQUNIT=Unit of measurement for rate, if specified.<br/>               (opt.)<br/>   Return value:  1 if rate is valid.<br/>                  0 if rate is invalid.<br/></pre>{:/}
 Input parameters | {::nomarkdown}ORQTYPE<br>ORQRATE<br>ORQUNIT{:/}
 Code | {::nomarkdown}  S ORRETURN=$$RATECHK^GMRVPCE0(ORQTYPE,ORQRATE,$G(ORQUNIT)){:/}


### CPRS

[Vitals/rVitals.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Vitals/rVitals.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}