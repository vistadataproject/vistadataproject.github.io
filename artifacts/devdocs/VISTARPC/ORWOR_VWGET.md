---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWOR VWGET<br/>
# ORWOR VWGET

Retrieves the user's default view for the orders tab.

## Properties

Property | Value
--- | ---
Label | VWGET
Routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [VWGET^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
Method Comment | Get the preferred view for orders
Code | {::nomarkdown}<pre><code> N FROM,THRU,FILTER,DGRP,FRMT,CHRN,BYGRP,S,VNAME,FL,I<br/> S REC=$$GET^XPAR("ALL","ORCH CONTEXT ORDERS",1,"I"),S=";"<br/> S FROM=$$DT($P(REC,S)),THRU=$$DT($P(REC,S,2)),FILTER=$P(REC,S,3)<br/> S DGRP=$P(REC,S,4),FRMT=$P(REC,S,5),CHRN=$P(REC,S,6),BYGRP=$P(REC,S,7)<br/> S:'$L(DGRP) DGRP="ALL" S DGRP=+$O(^ORD(100.98,"B",DGRP,0))<br/> I FILTER="" S FILTER=2  ; active orders<br/> I CHRN="" S CHRN="R"    ; reverse chronological<br/> I BYGRP="" S BYGRP=1    ; sort by display group<br/> D REVSTS^ORWORDG(.FL)<br/> S I=0 F  S I=$O(FL(I)) Q:'I  Q:+FL(I)=FILTER<br/> S VNAME=$P($G(FL(+I)),U,2)<br/> I '("^6^8^9^10^19^20^"[(U_FILTER_U)) S VNAME=VNAME_" Orders"<br/> I FILTER=2 S VNAME="Active Orders (includes Pending & Recent Activity)"<br/> I FILTER=23 S VNAME="Current Orders (Active & Pending Status Only)"<br/> S VNAME=VNAME_" - "_$P($G(^ORD(100.98,DGRP,0)),U)<br/> I (FROM>0)!(THRU>0) D<br/> . S VNAME=VNAME_" ("_$$FMTE^XLFDT(FROM,"2D")_" thru "<br/> . S VNAME=VNAME_$S(THRU>0:$$FMTE^XLFDT(THRU,"2D"),1:"")_")"<br/> S REC=FROM_S_THRU_S_FILTER_S_DGRP_S_FRMT_S_CHRN_S_BYGRP_S_VNAME</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}