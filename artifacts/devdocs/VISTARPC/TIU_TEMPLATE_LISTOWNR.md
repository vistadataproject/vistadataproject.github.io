---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU TEMPLATE LISTOWNR<br/>
# TIU TEMPLATE LISTOWNR



## Properties

Property | Value
--- | ---
Label | LISTOWNR
Routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FROM |  |  |  | 
DIR |  |  |  | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [LISTOWNR^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Method Comment | Return subset of personal owners
Input Parameters | TIUFROM, DIR
Code | {::nomarkdown}<pre><code> N FILE,IENS,FIELDS,FLAGS,NUMBER,TIUPART,INDEX,SCREEN,ID,TIU,TIUERR<br/> S FILE=200,FIELDS="@;.01",FLAGS="PB",INDEX="B",NUMBER=44<br/> S (IENS,TIUPART,ID,TIU,TIUERR)=""<br/> I DIR=1 S FLAGS="P"<br/> S SCREEN="I $O(^TIU(8927,""AROOT"",Y,0))"<br/> D LIST^DIC(FILE,IENS,FIELDS,FLAGS,NUMBER,.TIUFROM,.TIUPART,INDEX,SCREEN,ID,"TIU","TIUERR")<br/> K TIU("DILIST",0)<br/> N DA,I<br/> S DA="",I=0<br/> F  S DA=$O(TIU("DILIST",DA),DIR) Q:'DA  D<br/> . S I=I+1<br/> . S TIUY(I)=$G(TIU("DILIST",DA,0))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}