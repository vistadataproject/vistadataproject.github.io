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

 property | value 
 --- | --- 
 Method | HNCOK^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Returns true if Head and/or Neck Cancer is enabled
 Code | {::nomarkdown}  S ORY=0<br> I $$PATCH^XPDUTL("DG*5.3*397"),$$PATCH^XPDUTL("SD*5.3*244"),$$PATCH^XPDUTL("PX*1.0*111"),$$PATCH^XPDUTL("IVM*2.0*46") S ORY=1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}