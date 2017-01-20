---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPS MEDHIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPS MEDHIST{:/}
 tag | {::nomarkdown}MEDHIST{:/}
 routine | [ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | MEDHIST^[ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 Method comment | show admin history for a med  (RV)
 Input parameters | {::nomarkdown}DFN<br>ORIFN{:/}
 Code | {::nomarkdown}  N ORPSID,HPIV,ISIV,CKPKG,ORPHMID<br> N CLIVDISP<br> S ORPSID=+$P($$OI^ORX8(ORIFN),U,3),ISIV=0,HPIV=0<br> S ORROOT=$NA(^TMP("ORHIST",$J)) K @ORROOT<br> S ORPHMID=$G(^OR(100,+ORIFN,4))  ;Pharmacy order number<br> S ISIV=$O(^ORD(100.98,"B","IV RX",ISIV))<br> S HPIV=$O(^ORD(100.98,"B","TPN",HPIV))<br> S CLIVDISP=$O(^ORD(100.98,"B","CI RX",""))<br> S CKPKG=$$PATCH^XPDUTL("PSB*2.0*19")<br> I (ORPHMID["P")!(ORPHMID="") D  Q<br> . I '$L($T(HISTORY^PSBMLHS)) D  Q<br> . . S @ORROOT@(0)="This report is only available using BCMA version 2.0."<br> . D HISTORY^PSBMLHS(.ORROOT,DFN,ORPSID)  ; DBIA #3459 for BCMA v2.0<br> I ($P($G(^OR(100,+ORIFN,0)),U,11)=ISIV)!($P($G(^OR(100,+ORIFN,0)),U,11)=HPIV)!($P($G(^OR(100,+ORIFN,0)),U,11)=CLIVDISP) D  Q<br> . I 'CKPKG S @ORROOT@(0)="Medication Administration History is not available at this time for IV fluids."<br> . I CKPKG D<br> . . D RPC^PSBO(.ORROOT,"PM",DFN,"","","","","","","","","",ORPHMID)  ;DBIA #3955<br> . . I '$D(@ORROOT) S @ORROOT@(0)="No Medication Administration History found for the IV order."<br> I '$L($T(HISTORY^PSBMLHS)) D  Q<br> . S @ORROOT@(0)="This report is only available using BCMA version 2.0."<br> D HISTORY^PSBMLHS(.ORROOT,DFN,ORPSID)  ; DBIA #3459 for BCMA v2.0{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMeds.pas">rMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}