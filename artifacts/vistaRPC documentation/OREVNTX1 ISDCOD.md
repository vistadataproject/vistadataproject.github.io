---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 ISDCOD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 ISDCOD{:/}
 tag | {::nomarkdown}ISDCOD{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ISDCOD^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | True: the order need to be filtered out
 Input parameters | {::nomarkdown}ORIFN{:/}
 Code | {::nomarkdown}  N PAS,X3,X0,ORGRPLST,THEGRP,IDX,ODGRP<br> S (ORY,IDX)=0<br> Q:'$D(^OR(100,+ORIFN,0))<br> S X0=$G(^OR(100,+ORIFN,0))<br> S ODGRP=$P(X0,U,11)<br> D GETLST^XPAR(.ORGRPLST,"ALL","OREVNT EXCLUDE DGRP")<br> F  S IDX=$O(ORGRPLST(IDX)) Q:'IDX!ORY  D<br> . S THEGRP=$P($G(ORGRPLST(IDX)),U,2)<br> . I $$GRPCHK(THEGRP,ODGRP) S ORY=1<br> I ORY Q<br> S PAS=";1;2;7;13;"  ;*347 Update Filter<br> S:$D(^OR(100,+ORIFN,3)) X3=^OR(100,+ORIFN,3)<br> S:(PAS[(";"_$P(X3,U,3)_";")) ORY=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">Executable Only</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}