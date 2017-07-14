---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU ONE VISIT NOTE?<br/>
# TIU ONE VISIT NOTE?

Boolean RPC to evaulate if note has a corresponding visit.

## Properties

Property | Value
--- | ---
Label | TIUVISIT
Routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDOC | LITERAL |  | true | This is the TIU document type.
TIUDFN | LITERAL |  | true | This is the patient&#x27;s internal entry number (DFN).
TIUVISIT | LITERAL |  | true | This is the patient&#x27;s visit internal entry number.



## MUMPS Method Description

Property | Value
--- | ---
Method | [TIUVISIT^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Method Comment | Check for a 1 time only doc
Input Parameters | DOCTYP, DFN, VISIT
First Comment | {::nomarkdown}<pre><code>  TIUY    =    return value<br/>          = 0 if can add more than one or none already exist<br/>          = 1 if cannot add more than one and one already exists<br/>  DOCTYP  =    Pointer to ^TUI(8925.1,   TIU DOCUMENT DEFINITION<br/>  DFN     =    Patient IEN<br/>  VISIT   =    Visit String "LOC;VDATE;VTYP"</code></pre>{:/}
Code | {::nomarkdown}<pre><code> I $$PATCH^XPDUTL("OR*3.0*195") D<br/> . Q:($G(DOCTYP)="")!($G(DFN)="")!($G(VISIT)="")<br/> . N TIUDPRM,TIUTEST<br/> . D DOCPRM^TIULC1(DOCTYP,.TIUDPRM)<br/> . S TIUY=$S($P(TIUDPRM(0),U,10)="":1,1:$P(TIUDPRM(0),U,10))<br/> . I TIUY=1 S TIUY=0 Q<br/> . I $L(VISIT,";")=3 D<br/> . . S TIUTEST=$$EXIST^TIUEDI3(DFN,DOCTYP,VISIT)<br/> . . I TIUTEST S TIUY=1<br/> . . I 'TIUTEST S TIUY=0<br/> I '$$PATCH^XPDUTL("OR*3.0*195") D<br/> . Q:($G(DOCTYP)="")!($G(DFN)="")!($G(VISIT)="")<br/> . N TIUX3<br/> . S TIUX3=+$O(^TIU(8925.95,"B",DOCTYP,""))<br/> . S TIUY=$P($G(^TIU(8925.95,TIUX3,0)),U,10) S TIUY=$S(TIUY=0:1,1:0)<br/> . Q:'TIUY<br/> . S VISIT=((9999999-$P(VISIT,"."))_"."_$P(VISIT,".",2))<br/> . S VISIT=+$O(^AUPNVSIT("AA",DFN,VISIT,""))<br/> . S TIUY=$S($D(^TIU(8925,"AV",DFN,DOCTYP,VISIT)):0,1:1)<br/> . S TIUY=$S(TIUY=0:1,1:0)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}