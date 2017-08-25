---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPX REMINDERS LIST<br/>
# ORQQPX REMINDERS LIST

Returns a list of clinical reminders.

## Properties

Property | Value
--- | ---
Label | REMIND
MUMPS Implementation | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | Patient identifier (DFN) from patient file [#2].



## MUMPS Method Description

Property | Value
--- | ---
Method | [REMIND^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Method Comment | return pt&#x27;s currently due PCE clinical reminders
Input Parameters | ORPT
First Comment | {::nomarkdown}<pre><code> in the format file 811.9 ien^reminder print name^date due^last occur.</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORTMPLST,ORI,ORJ,ORIEN,ORTXT,ORX,ORLASTDT,ORDUEDT,ORLOC<br/> S ORJ=0<br/> I +$G(ORPT)>0 D<br/> .N DFN S DFN=ORPT,VA200="" D OERR^VADPT<br/> .I +$G(VAIN(4))>0 S ORLOC=+$G(^DIC(42,+$G(VAIN(4)),44))<br/> .K VA200,VAIN<br/> D REMLIST(.ORTMPLST,$G(ORLOC))<br/> S ORI=0 F  S ORI=$O(ORTMPLST(ORI)) Q:'ORI  D<br/> .S ORIEN=$P(ORTMPLST(ORI),U,2)<br/> .K ^TMP("PXRHM",$J)<br/> .N ORPRI,ORDUE,ORSTA<br/> .D MAIN^PXRM(ORPT,ORIEN,0)<br/> .S ORTXT="",ORTXT=$O(^TMP("PXRHM",$J,ORIEN,ORTXT)) Q:ORTXT=""  D<br/> ..S ORX=^TMP("PXRHM",$J,ORIEN,ORTXT)<br/> ..S ORSTA=$P(ORX,U)<br/> ..S ORDUEDT=$P(ORX,U,2),ORLASTDT=$P(ORX,U,3)<br/> ..S ORLASTDT=$S(+$G(ORLASTDT)>0:ORLASTDT,1:"")  ;null if not a date<br/> ..S ORJ=ORJ+1<br/> ..S ORDUE=$S(ORSTA["DUE":1,ORSTA["ERROR":3,ORSTA["CNBD":4,1:2)<br/> ..I ORDUE'=2 D<br/> ...S ORPRI=$P($G(^PXD(811.9,ORIEN,0)),U,10) I ORPRI="" S ORPRI=2<br/> ...S ORY(ORJ)=ORIEN_U_ORTXT_U_ORDUEDT_U_ORLASTDT_U_ORPRI_U_ORDUE_U_$$DLG^PXRMRPCA(ORIEN)_U_U_U_U_$$DLGWIPE^PXRMRPCA(ORIEN)<br/> ..I ORDUE=2 D<br/> ...S ORY(ORJ)=ORIEN_U_ORTXT_U_U_U_U_ORDUE_U_$$DLG^PXRMRPCA(ORIEN)_U_U_U_U_$$DLGWIPE^PXRMRPCA(ORIEN)<br/> .K ^TMP("PXRHM",$J)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas">rCover.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}