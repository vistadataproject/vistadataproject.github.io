---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU DIV AND CLASS INFO<br/>
# TIU DIV AND CLASS INFO

Returns a list of Divisions and User Classes for a specific User.

## Properties

Property | Value
--- | ---
Label | USERINFO
Routine | [TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER |  |  |  | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [USERINFO^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
Method Comment | Returns List of User Divisions and ASU Classes
Input Parameters | USER
Code | {::nomarkdown}<pre><code> N TIUI,I,IDX,IEN,TIUERR,SRV<br/> S I=0,IDX=1<br/> F  S I=$O(^VA(200,USER,2,I)) Q:'I  D<br/> . I USER=DUZ,I=DUZ(2) S ORY(1)="D^"_I<br/> . E  S IDX=IDX+1,ORY(IDX)="D^"_I<br/> S TIUI=""<br/> F  S TIUI=$O(^USR(8930,"B",TIUI)) Q:(TIUI="")  D<br/> . S IEN=$O(^USR(8930,"B",TIUI,0))<br/> . I $P(^USR(8930,IEN,0),U,3)="0" Q<br/> . I '$$ISA^USRLM(USER,IEN,.TIUERR) Q<br/> . S IDX=IDX+1,ORY(IDX)="C^"_IEN<br/> S SRV=$P($G(^VA(200,USER,5)),U)<br/> I +SRV S IDX=IDX+1,ORY(IDX)="S^"_SRV</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}