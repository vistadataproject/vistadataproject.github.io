---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPS MEDHIST 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPS MEDHIST{:/}
 tag | {::nomarkdown}MEDHIST{:/}
 routine | [ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | MEDHIST^[ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 Method comment | show admin history for a med  (RV)
 Input parameters | {::nomarkdown}DFN<br/>ORIFN{:/}
 Code | ```  N ORPSID,HPIV,ISIV,CKPKG,ORPHMID
 N CLIVDISP
 S ORPSID=+$P($$OI^ORX8(ORIFN),U,3),ISIV=0,HPIV=0
 S ORROOT=$NA(^TMP("ORHIST",$J)) K @ORROOT
 S ORPHMID=$G(^OR(100,+ORIFN,4))  ;Pharmacy order number
 S ISIV=$O(^ORD(100.98,"B","IV RX",ISIV))
 S HPIV=$O(^ORD(100.98,"B","TPN",HPIV))
 S CLIVDISP=$O(^ORD(100.98,"B","CI RX",""))
 S CKPKG=$$PATCH^XPDUTL("PSB*2.0*19")
 I (ORPHMID["P")!(ORPHMID="") D  Q
 . I '$L($T(HISTORY^PSBMLHS)) D  Q
 . . S @ORROOT@(0)="This report is only available using BCMA version 2.0."
 . D HISTORY^PSBMLHS(.ORROOT,DFN,ORPSID)  ; DBIA #3459 for BCMA v2.0
 I ($P($G(^OR(100,+ORIFN,0)),U,11)=ISIV)!($P($G(^OR(100,+ORIFN,0)),U,11)=HPIV)!($P($G(^OR(100,+ORIFN,0)),U,11)=CLIVDISP) D  Q
 . I 'CKPKG S @ORROOT@(0)="Medication Administration History is not available at this time for IV fluids."
 . I CKPKG D
 . . D RPC^PSBO(.ORROOT,"PM",DFN,"","","","","","","","","",ORPHMID)  ;DBIA #3955
 . . I '$D(@ORROOT) S @ORROOT@(0)="No Medication Administration History found for the IV order."
 I '$L($T(HISTORY^PSBMLHS)) D  Q
 . S @ORROOT@(0)="This report is only available using BCMA version 2.0."
 D HISTORY^PSBMLHS(.ORROOT,DFN,ORPSID)  ; DBIA #3459 for BCMA v2.0```




 Generated on January 14th 2017, 7:26:35 am