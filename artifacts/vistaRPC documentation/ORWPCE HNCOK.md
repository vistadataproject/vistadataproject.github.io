---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE HNCOK 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE HNCOK{:/}
 tag | {::nomarkdown}HNCOK{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE if the Head and/or Neck Cancer patches have been installed{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns true if Head and/or Neck Cancer is enabled
 Lines | {::nomarkdown} S ORY=0<br/> I $$PATCH^XPDUTL("DG*5.3*397"),$$PATCH^XPDUTL("SD*5.3*244"),$$PATCH^XPDUTL("PX*1.0*111"),$$PATCH^XPDUTL("IVM*2.0*46") S ORY=1{:/}




 Generated on January 13th 2017, 7:15:28 am