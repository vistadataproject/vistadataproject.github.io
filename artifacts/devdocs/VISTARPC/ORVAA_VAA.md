---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORVAA VAA<br/>
# ORVAA VAA

Returns the policy name for a veteran with VA Advantage. If the veteran does not have VA Advantage the return value will be 0.

## Properties

Property | Value
--- | ---
Label | VAA
Routine | [ORVAA](http://code.osehra.org/dox/Routine_ORVAA_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | REFERENCE | 255 | true | The DFN is the veteran patient&#x27;s Internal Entry Number in the PATIENT file.



## MUMPS Method Description

Property | Value
--- | ---
Method | [VAA^ORVAA](http://code.osehra.org/dox/Routine_ORVAA_source.html)
Input Parameters | DFN
First Comment | {::nomarkdown}<pre><code>Returns primary insurance policy name if VAA or TriCare</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,IBDT,IBFLDS,IBSTAT,LC,LQ,ORIBR,ORX,PIC,WI<br/> S ORY(0)=""<br/> S IBSTAT="RB",(LC,ORIBR,PIC)="",(LQ,WI)=0,IBFLDS="*"<br/> S IBDT=$$NOW^XLFDT<br/> S PIC=$$INSUR^IBBAPI(DFN,IBDT,IBSTAT,.ORIBR,IBFLDS)<br/> I PIC<0 S ORY(0)=0 Q<br/> I PIC=0 S:ORY(0)="" ORY(0)=0 Q<br/> S $P(ORY(0),U)="Pt Insur",$P(ORY(0),U,2)="Patient has active Insurance"<br/> S $P(ORY(0),U,3)=""<br/> F  S LC=$O(ORIBR("IBBAPI","INSUR",LC)) Q:LC=""!(LQ)  D<br/> . D FLD01,FLD02,FLD03,FLD04,FLD05,FLD06,FLD07,FLD08,FLD09,FLD10<br/> . D FLD11,FLD12,FLD13,FLD14,FLD15,FLD16,FLD17,FLD18,FLD19,FLD20<br/> . S WI=WI+1,ORY(WI)=""<br/> I ORY(0)="" S ORY(0)=0</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fCover.pas">fCover.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}