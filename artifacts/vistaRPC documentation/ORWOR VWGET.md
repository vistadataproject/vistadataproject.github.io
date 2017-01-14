---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWOR VWGET 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR VWGET{:/}
 tag | {::nomarkdown}VWGET{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Retrieves the user's default view for the orders tab.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | VWGET^[ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 Method comment | Get the preferred view for orders
 Code | ```  N FROM,THRU,FILTER,DGRP,FRMT,CHRN,BYGRP,S,VNAME,FL,I
 S REC=$$GET^XPAR("ALL","ORCH CONTEXT ORDERS",1,"I"),S=";"
 S FROM=$$DT($P(REC,S)),THRU=$$DT($P(REC,S,2)),FILTER=$P(REC,S,3)
 S DGRP=$P(REC,S,4),FRMT=$P(REC,S,5),CHRN=$P(REC,S,6),BYGRP=$P(REC,S,7)
 S:'$L(DGRP) DGRP="ALL" S DGRP=+$O(^ORD(100.98,"B",DGRP,0))
 I FILTER="" S FILTER=2  ; active orders
 I CHRN="" S CHRN="R"    ; reverse chronological
 I BYGRP="" S BYGRP=1    ; sort by display group
 D REVSTS^ORWORDG(.FL)
 S I=0 F  S I=$O(FL(I)) Q:'I  Q:+FL(I)=FILTER
 S VNAME=$P($G(FL(+I)),U,2)
 I '("^6^8^9^10^19^20^"[(U_FILTER_U)) S VNAME=VNAME_" Orders"
 I FILTER=2 S VNAME="Active Orders (includes Pending & Recent Activity)"
 I FILTER=23 S VNAME="Current Orders (Active & Pending Status Only)"
 S VNAME=VNAME_" - "_$P($G(^ORD(100.98,DGRP,0)),U)
 I (FROM>0)!(THRU>0) D
 . S VNAME=VNAME_" ("_$$FMTE^XLFDT(FROM,"2D")_" thru "
 . S VNAME=VNAME_$S(THRU>0:$$FMTE^XLFDT(THRU,"2D"),1:"")_")"
 S REC=FROM_S_THRU_S_FILTER_S_DGRP_S_FRMT_S_CHRN_S_BYGRP_S_VNAME```




 Generated on January 14th 2017, 7:26:35 am