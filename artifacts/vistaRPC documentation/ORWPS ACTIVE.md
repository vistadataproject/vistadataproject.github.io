---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPS ACTIVE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPS ACTIVE{:/}
 tag | {::nomarkdown}ACTIVE{:/}
 routine | [ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns listing of a patient's active inpatient and outpatientmedications.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | retrieve active inpatient & outpatient meds
 Input Parameters | {::nomarkdown}DFN<br/>USER<br/>VIEW<br/>UPDATE{:/}
 Lines | ```
 K ^TMP("PS",$J)
 K ^TMP("ORACT",$J)
 N BEG,DATE,END,ERROR,CTX,STVIEW
 S (BEG,END,CTX)=""
 S VIEW=+$G(VIEW)
 S UPDATE=+$G(UPDATE)
 I VIEW=0,UPDATE=0 S VIEW=1
 S CTX=$$GET^XPAR("ALL","ORCH CONTEXT MEDS")
 I CTX=";" D DEL^XPAR("USR.`"_DUZ,"ORCH CONTEXT MEDS")
 S CTX=$$GET^XPAR("ALL","ORCH CONTEXT MEDS")
 S BEG=$$DT($P(CTX,";")),END=$$DT($P(CTX,";",2))
 I +$G(USER)=0 S USER=DUZ
 I UPDATE=1 D
 .S STVIEW=$$GET^XPAR($G(USER)_";VA(200,","OR MEDS TAB SORT",1,"I")
 .I VIEW>0,+STVIEW'=VIEW D PUT^XPAR(DUZ_";VA(200,","OR MEDS TAB SORT",,VIEW,.ERROR) S STVIEW=VIEW
 .I VIEW=0,+STVIEW=0 D PUT^XPAR(DUZ_";VA(200,","OR MEDS TAB SORT",,"1",.ERROR) S STVIEW=1,VIEW=1
 .I VIEW=0,+STVIEW'=VIEW S VIEW=+STVIEW
 .S LST(0)=STVIEW_U
 .S DATE=""
 .I BEG>0,END>0 S DATE=" ("_$$FMTE^XLFDT(BEG,2)_"-"_$$FMTE^XLFDT(END,2)_")"
 .;I +BEG=0!(+END=0) S DATE=" (To set a specific date range go to Tools|Options|Other Parameters)"
 .S LST(0)=LST(0)_DATE
 D OCL^PSOORRL(DFN,BEG,END,VIEW)
 N ITMP,FIELDS,INSTRUCT,COMMENTS,REASON,NVSDT,TYPE,ILST,J S ILST=0
 S ITMP="" F  S ITMP=$O(^TMP("PS",$J,ITMP)) Q:'ITMP  D
 . K INSTRUCT,COMMENTS,REASON
 . K ^TMP("ORACT",$J,"COMMENTS")
 . S COMMENTS="^TMP(""ORACT"",$J,""COMMENTS"")"
 . S (INSTRUCT,@COMMENTS)="",FIELDS=^TMP("PS",$J,ITMP,0)
 . I +$P(FIELDS,"^",8),$D(^OR(100,+$P(FIELDS,"^",8),8,"C","XX")) D
 . . S $P(^TMP("PS",$J,ITMP,0),"^",2)="*"_$P(^TMP("PS",$J,ITMP,0),"^",2) ;dan testing
 . S TYPE=$S($P($P(FIELDS,U),";",2)="O":"OP",1:"UD")
 . I $D(^TMP("PS",$J,ITMP,"CLINIC",0)) S TYPE="CP"
 . N LOC,LOCEX S (LOC,LOCEX)=""
 . I TYPE="CP" S LOC=$G(^TMP("PS",$J,ITMP,"CLINIC",0))
 . S:LOC LOCEX=$P($G(^SC(+LOC,0)),U)_":"_+LOC ;IMO NEW
 . I TYPE="OP",$P(FIELDS,";")["N" S TYPE="NV"          ;non-VA med
 . I $O(^TMP("PS",$J,ITMP,"A",0))>0 S TYPE="IV"
 . I $O(^TMP("PS",$J,ITMP,"B",0))>0 S TYPE="IV"
 . I (TYPE="UD")!(TYPE="CP") D UDINST(.INSTRUCT,ITMP)
 . I TYPE="OP" D OPINST(.INSTRUCT,ITMP)
 . I TYPE="IV" D IVINST(.INSTRUCT,ITMP)
 . I TYPE="NV" D NVINST(.INSTRUCT,ITMP),NVREASON(.REASON,.NVSDT,ITMP)
 . I (TYPE="UD")!(TYPE="IV")!(TYPE="NV")!(TYPE="CP") D SETMULT(COMMENTS,ITMP,"SIO")
 . M COMMENTS=@COMMENTS
 . I $D(COMMENTS(1)) S COMMENTS(1)="\"_COMMENTS(1)
 . S:TYPE="NV" $P(FIELDS,U,4)=$G(NVSDT)
 . I LOC S LST($$NXT)="~CP:"_LOCEX_U_FIELDS
 . E  S LST($$NXT)="~"_TYPE_U_FIELDS
 . S J=0 F  S J=$O(INSTRUCT(J)) Q:'J  S LST($$NXT)=INSTRUCT(J)
 . S J=0 F  S J=$O(COMMENTS(J)) Q:'J  S LST($$NXT)="t"_COMMENTS(J)
 . S J=0 F  S J=$O(REASON(J)) Q:'J  S LST($$NXT)="t"_REASON(J)
 K ^TMP("PS",$J)
 K ^TMP("ORACT",$J)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}VIEW{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}UPDATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is use to determine if the parameter that stored the user view preference is updated. This should be set to 1 if called from CPRS and set to 0 if called from another application.{:/} | 




 Generated on January 13th 2017, 6:55:29 am