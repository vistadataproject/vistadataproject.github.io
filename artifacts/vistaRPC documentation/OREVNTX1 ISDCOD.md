---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OREVNTX1 ISDCOD 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 ISDCOD{:/}
 tag | {::nomarkdown}ISDCOD{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ISDCOD^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | True: the order need to be filtered out
 Input parameters | {::nomarkdown}ORIFN{:/}
 Code | ```  N PAS,X3,X0,ORGRPLST,THEGRP,IDX,ODGRP
 S (ORY,IDX)=0
 Q:'$D(^OR(100,+ORIFN,0))
 S X0=$G(^OR(100,+ORIFN,0))
 S ODGRP=$P(X0,U,11)
 D GETLST^XPAR(.ORGRPLST,"ALL","OREVNT EXCLUDE DGRP")
 F  S IDX=$O(ORGRPLST(IDX)) Q:'IDX!ORY  D
 . S THEGRP=$P($G(ORGRPLST(IDX)),U,2)
 . I $$GRPCHK(THEGRP,ODGRP) S ORY=1
 I ORY Q
 S PAS=";1;2;7;13;"  ;*347 Update Filter
 S:$D(^OR(100,+ORIFN,3)) X3=^OR(100,+ORIFN,3)
 S:(PAS[(";"_$P(X3,U,3)_";")) ORY=1```




 Generated on January 14th 2017, 7:26:35 am