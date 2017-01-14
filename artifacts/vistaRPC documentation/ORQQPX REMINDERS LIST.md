---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPX REMINDERS LIST 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX REMINDERS LIST{:/}
 tag | {::nomarkdown}REMIND{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of clinical reminders.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier (DFN) from patient file [#2].{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | REMIND^[ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 Method comment | return pt's currently due PCE clinical reminders
 First comment | {::nomarkdown}in the format file 811.9 ien^reminder print name^date due^last occur.{:/}
 Input parameters | {::nomarkdown}ORPT{:/}
 Code | ```  N ORTMPLST,ORI,ORJ,ORIEN,ORTXT,ORX,ORLASTDT,ORDUEDT,ORLOC
 S ORJ=0
 I +$G(ORPT)>0 D
 .N DFN S DFN=ORPT,VA200="" D OERR^VADPT
 .I +$G(VAIN(4))>0 S ORLOC=+$G(^DIC(42,+$G(VAIN(4)),44))
 .K VA200,VAIN
 D REMLIST(.ORTMPLST,$G(ORLOC))
 S ORI=0 F  S ORI=$O(ORTMPLST(ORI)) Q:'ORI  D
 .S ORIEN=$P(ORTMPLST(ORI),U,2)
 .K ^TMP("PXRHM",$J)
 .N ORPRI,ORDUE,ORSTA
 .D MAIN^PXRM(ORPT,ORIEN,0)
 .S ORTXT="",ORTXT=$O(^TMP("PXRHM",$J,ORIEN,ORTXT)) Q:ORTXT=""  D
 ..S ORX=^TMP("PXRHM",$J,ORIEN,ORTXT)
 ..S ORSTA=$P(ORX,U)
 ..S ORDUEDT=$P(ORX,U,2),ORLASTDT=$P(ORX,U,3)
 ..S ORLASTDT=$S(+$G(ORLASTDT)>0:ORLASTDT,1:"")  ;null if not a date
 ..S ORJ=ORJ+1
 ..S ORDUE=$S(ORSTA["DUE":1,ORSTA["ERROR":3,ORSTA["CNBD":4,1:2)
 ..I ORDUE'=2 D
 ...S ORPRI=$P($G(^PXD(811.9,ORIEN,0)),U,10) I ORPRI="" S ORPRI=2
 ...S ORY(ORJ)=ORIEN_U_ORTXT_U_ORDUEDT_U_ORLASTDT_U_ORPRI_U_ORDUE_U_$$DLG^PXRMRPCA(ORIEN)_U_U_U_U_$$DLGWIPE^PXRMRPCA(ORIEN)
 ..I ORDUE=2 D
 ...S ORY(ORJ)=ORIEN_U_ORTXT_U_U_U_U_ORDUE_U_$$DLG^PXRMRPCA(ORIEN)_U_U_U_U_$$DLGWIPE^PXRMRPCA(ORIEN)
 .K ^TMP("PXRHM",$J)```




 Generated on January 14th 2017, 7:26:35 am