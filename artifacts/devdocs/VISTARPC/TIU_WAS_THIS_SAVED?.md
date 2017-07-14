---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU WAS THIS SAVED?<br/>
# TIU WAS THIS SAVED?

This Boolean Remote Procedure will evaluate whether a given document wascommitted to the database, or whether the user who last edited it wasdisconnected.

## Properties

Property | Value
--- | ---
Label | SAVED
Routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the Internal Entry Number of the Document in the TIU Document File(#8925).



## MUMPS Method Description

Property | Value
--- | ---
Method | [SAVED^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
Method Comment | Was the document committed to the database?
Input Parameters | TIUDA
Code | {::nomarkdown}<pre><code> N TIUD12,TIUD13,TIUEBY,TIUAUT,TIUECS S TIUY=1<br/> S TIUD12=$G(^TIU(8925,TIUDA,12)),TIUD13=$G(^(13))<br/> S TIUEBY=$P(TIUD13,U,2),TIUAUT=$P(TIUD12,U,2),TIUECS=$P(TIUD12,U,8)<br/> I $D(^TIU(8925,"ASAVE",+DUZ,TIUDA)) D  Q<br/> . S TIUY="0^You appear to have been disconnected..."<br/> I DUZ'=TIUEBY,(TIUEBY'=TIUAUT),$D(^TIU(8925,"ASAVE",+TIUEBY,TIUDA)) D  Q<br/> . S TIUY="0^The transcriber appears to have been disconnected..."<br/> I DUZ'=TIUAUT,$D(^TIU(8925,"ASAVE",+TIUAUT,TIUDA)) D  Q<br/> . S TIUY="0^The author appears to have been disconnected..."<br/> I DUZ'=TIUECS,$D(^TIU(8925,"ASAVE",+TIUECS,TIUDA)) D  Q<br/> . S TIUY="0^The expected cosigner appears to have been disconnected..."</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}