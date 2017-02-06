---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE HNCOK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE HNCOK{:/}
 tag | {::nomarkdown}HNCOK{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE if the Head and/or Neck Cancer patches have been installed{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | HNCOK^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Returns true if Head and/or Neck Cancer is enabled
 Code | {::nomarkdown}  S ORY=0<br> I $$PATCH^XPDUTL("DG*5.3*397"),$$PATCH^XPDUTL("SD*5.3*244"),$$PATCH^XPDUTL("PX*1.0*111"),$$PATCH^XPDUTL("IVM*2.0*46") S ORY=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:04 am</p>{:/}