---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE DELETE<br/>
# ORWPCE DELETE

Delete PCE information related to a note being deleted.

## Properties

Property | Value
--- | ---
Label | DELETE
MUMPS Implementation | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [DELETE^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | delete PCE info when deleting a note
Input Parameters | VSTR, DFN
Code | {::nomarkdown}<pre><code> N VISIT,ORCOUNT,ORDTE,ORLOC<br/> N ZTIO,ZTRTN,ZTDTH,ZTSAVE,ZTDESC,ZTSYNC,ZTSK<br/> S ORLOC=$P(VSTR,";"),ORDTE=$P(VSTR,";",2)<br/> I '$D(^TMP("ORWPCE",$J,VSTR))&('$$GETENC^PXAPI(DFN,ORDTE,ORLOC)) S VAL=0 Q  ; no PCE data saved yet<br/> I $P(VSTR,";",3)="H" S VAL=0 Q           ; leave inpatient alone<br/> I $L($T(DOCCNT^TIUSRVLV))=0 S VAL=0 Q    ; leave if no tiu entry point<br/> D DOCCNT^TIUSRVLV(.ORCOUNT,DFN,VSTR)     ; Do not delete if another<br/> I ORCOUNT>0 S VAL=0 Q                    ; title points to visit<br/> S ZTIO="ORW/PXAPI RESOURCE",ZTRTN="DQDEL^ORWPCE1",ZTDTH=$H<br/> S (ZTSAVE("VSTR"),ZTSAVE("DFN"))="",ZTDESC="CPRS Delete Note/PCE"<br/> S ZTSYNC="ORW"_VSTR<br/> D ^%ZTLOAD I '$D(ZTSK) D DQDEL^ORWPCE1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}