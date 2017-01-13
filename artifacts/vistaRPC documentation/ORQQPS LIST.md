---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPS LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPS LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORQQPS](http://code.osehra.org/dox/Routine_ORQQPS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a list of a patient's medications.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return pt's condensed medication list
 Input Parameters | {::nomarkdown}ORPT<br/>ORSTRTDT<br/>ORSTOPDT{:/}
 Lines | ```
 K ^TMP("PS",$J),^TMP("ORPS",$J)
 D OCL^PSOORRL(ORPT,ORSTRTDT,ORSTOPDT)
 N I,J,K,X,Z,ZZ,NODE,RSORT,NAME,SCH,MDR,RATE,TYPE,ADD,SOL,IVX
 S I=0,X=0,NODE=0,SCH="",MDR=""
 F  S X=$O(^TMP("PS",$J,X)) Q:X<1  D
 .Q:+$P(^TMP("PS",$J,X,0),U)<1
 .S TYPE=$P(^TMP("PS",$J,X,0),U)
 .I +$G(^TMP("PS",$J,X,"MDR",0))>0 D  ;get abbrev med route
 ..S ZZ=^TMP("PS",$J,X,"MDR",0) F Z=1:1:ZZ D
 ...I Z=1 S MDR=^TMP("PS",$J,X,"MDR",Z,0)
 ...E  S MDR=MDR_", "_^TMP("PS",$J,X,"MDR",Z,0)
 .I +$G(^TMP("PS",$J,X,"SCH",0))>0 D  ;get schedule
 ..S ZZ=^TMP("PS",$J,X,"SCH",0) F Z=1:1:ZZ D
 ...I Z=1 S SCH=$P(^TMP("PS",$J,X,"SCH",Z,0),U)
 ...E  S SCH=SCH_", "_$P(^TMP("PS",$J,X,"SCH",Z,0),U)
 .;
 .I TYPE["I",+$G(^TMP("PS",$J,X,"B",0))>0 D  ;IV meds - get solution
 ..S ZZ=^TMP("PS",$J,X,"B",0) F Z=1:1:ZZ D
 ...I Z=1 S SOL=$P(^TMP("PS",$J,X,"B",Z,0),U)_" "_$P(^(0),U,2)
 ...E  S SOL=SOL_", "_$P(^TMP("PS",$J,X,"B",Z,0),U)_" "_$P(^(0),U,2)
 ..I +$G(^TMP("PS",$J,X,"A",0))>0 D  ;get additive
 ...S ZZ=^TMP("PS",$J,X,"A",0) F Z=1:1:ZZ D
 ....S ADD=$P(^TMP("PS",$J,X,"A",Z,0),U)_" "_$P(^(0),U,2)
 ....S NAME=ADD_" in "_$G(SOL)
 ....S RSORT=9999999-$P(^TMP("PS",$J,X,0),U,4)_$P(^(0),U)_NAME
 ....S RSORT=$E(RSORT,1,128)  ;limit gbl subscript length to 128 chars
 ....S ^TMP("ORPS",$J,RSORT)=$P(^TMP("PS",$J,X,0),U)_U_NAME_U_$P(^(0),U,4)_U_$G(MDR)_U_$P(^(0),U,3)
 ..E  D
 ...S NAME=$G(SOL)
 ...S RSORT=9999999-$P(^TMP("PS",$J,X,0),U,4)_$P(^(0),U)
 ...S RSORT=$E(RSORT,1,128)  ;limit gbl subscript length to 128 chars
 ...S ^TMP("ORPS",$J,RSORT)=$P(^TMP("PS",$J,X,0),U)_U_NAME_U_$P(^(0),U,4)_U_$G(MDR)_U_$P(^(0),U,3)
 .;
 .I TYPE["I",'(+$G(^TMP("PS",$J,X,"B",0))>0) D  ;unit dose inpatient meds
 ..S RSORT=9999999-$P(^TMP("PS",$J,X,0),U,4)_$P(^(0),U)_$P(^(0),U,2)
 ..S RSORT=$E(RSORT,1,128)  ;limit gbl subscript length to 128 chars
 ..S ^TMP("ORPS",$J,RSORT)=$P(^TMP("PS",$J,X,0),U)_U_$P(^(0),U,2)_U_$P(^(0),U,4)_U_$G(MDR)_U_$G(SCH)
 .;
 .I TYPE["O" D  ;outpatient meds
 ..S RSORT=9999999-$P(^TMP("PS",$J,X,0),U,4)_$P(^(0),U)_$P(^(0),U,2)
 ..S RSORT=$E(RSORT,1,128)  ;limit gbl subscript length to 128 chars
 ..S ^TMP("ORPS",$J,RSORT)=$P(^TMP("PS",$J,X,0),U)_U_$P(^(0),U,2)_U_$P(^(0),U,4)_U_$G(MDR)_U_$G(SCH)_U_$P(^(0),U,5)
 .;
 F  S NODE=$O(^TMP("ORPS",$J,NODE)) Q:NODE<1  D
 .S I=I+1
 .S ORY(I)=^TMP("ORPS",$J,NODE)
 S:+$G(ORY(1))<1 ORY(1)="^No medications found."
 K ^TMP("PS",$J),^TMP("ORPS",$J)```
 Leading comment lines | {::nomarkdown}id^nameform^stop date^route^schedule/infusion rate^refills remaining{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient id (DFN) from Patient File (#2).{:/} | 
| {::nomarkdown}START DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Start date/time in FileMan format indicating what date/time to beginlisting medications.{:/} | 
| {::nomarkdown}STOP DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Stop date/time in FileMan format indicating what date/time to end listingmedications.{:/} | 




 Generated on January 13th 2017, 6:55:28 am