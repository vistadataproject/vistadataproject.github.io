---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DG CHK BS5 XREF ARRAY 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DG CHK BS5 XREF ARRAY{:/}
 tag | {::nomarkdown}GUIBS5A{:/}
 routine | [DPTLK6](http://code.osehra.org/dox/Routine_DPTLK6_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}CHECKS IF OTHER PATIENTS ON 'BS5' XREF WITH SAME LAST NAMERETURN 1 OR 0 IN 1ST STRING (-1 IF BAD DFN OR NO ZERO NODE).RETURNS ARRAY NODES WHERE TEXT IS PRECEEDED BY 0 AND PATIENT DATAIS PRECEEDED BY 1.  PATIENT DATA WILL BE IN FOLLOWING FORMAT: 1^DFN^PATIENT NAME^DOB^SSN{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}PATIENT FILE IEN{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GUIBS5A^[DPTLK6](http://code.osehra.org/dox/Routine_DPTLK6_source.html)
 Method comment | RPC checks if other patients on "BS5" xref
 First comment | {::nomarkdown}with same last name<br/>returns 1 or 0 in 1st string (or -1 if bad DFN or no zero node)<br/>if 1 returns array nodes where<br/>text is preceeded by 0 (0^<text>) <br/>and patient data is preceeded by 1 (1^DFN^patient name^DOB^SSN)<br/>return type:  global array<br/>parameter:  ien of Patient file{:/}
 Input parameters | {::nomarkdown}DFN{:/}
 Code | ```  K GUIDATA<br/> I '$G(DFN) S GUIDATA(1)=-1 Q<br/> I '$D(^DPT(DFN,0)) S GUIDATA(1)=-1 Q<br/> I '$$BS5^DPTLK5(DFN) S GUIDATA(1)=0 Q<br/> K ^TMP("DPTLK6",$J)<br/> S ^TMP("DPTLK6",$J,1)=1<br/> N DPT0,DPTNME,DPTSSN,DPTBS5,DPTLAST,DPTIEN,DPTCNT,DPTDOB,DPTSSN1<br/> S DPT0=^DPT(DFN,0)<br/> S DPTNME=$E(DPT0,1),DPTSSN=$E($P(DPT0,U,9),6,9)<br/> S DPTBS5=DPTNME_DPTSSN<br/> S DPTLAST=$P($P(DPT0,U),",")<br/> S ^TMP("DPTLK6",$J,2)="0^There is more than one patient whose last name is "_DPTLAST<br/> S ^TMP("DPTLK6",$J,3)="0^and whose social security number ends with "_DPTSSN<br/> S DPTCNT=3<br/> S DPTIEN=0<br/> F  S DPTIEN=$O(^DPT("BS5",DPTBS5,DPTIEN)) Q:'DPTIEN  D<br/> .S DPT0=$G(^DPT(DPTIEN,0)),DPTNME=$P($P(DPT0,U),",")<br/> .Q:DPTNME'=DPTLAST<br/> .S DPTNME=$P(DPT0,U)<br/> .I $T(DOB^DPTLK1)'="" S DPTDOB=$$DOB^DPTLK1(DPTIEN,2),DPTSSN1=$$SSN^DPTLK1(DPTIEN)<br/> .E  S DPTDOB=$P(DPT0,U,3),DPTSSN1=$P(DPT0,U,9)<br/> .S DPTCNT=DPTCNT+1<br/> .S ^TMP("DPTLK6",$J,DPTCNT)="1"_U_DPTIEN_U_DPTNME_U_DPTDOB_U_DPTSSN1<br/> S DPTCNT=DPTCNT+1<br/> S ^TMP("DPTLK6",$J,DPTCNT)="0^Are you sure you wish to continue?"<br/> M GUIDATA=^TMP("DPTLK6",$J)<br/> K ^TMP("DPTLK6",$J)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}