---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWU VERSRV<br/>
# ORWU VERSRV

Returns the server version of a particular option.  This is specificallyused by CPRS GUI to determine the current server version of the associatedsoftware.

## Properties

Property | Value
--- | ---
Label | VERSRV
Routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [VERSRV^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Method Comment | Return server version of option name
Input Parameters | X, CLVER
Code | {::nomarkdown}<pre><code> S ORWCLVER=$G(CLVER)  ; leave in partition for session<br/> N BADVAL,ORLST<br/> D FIND^DIC(19,"",1,"X",X,1,,,,"ORLST")<br/> I 'ORLST("DILIST",0) S VAL="0.0.0.0" Q<br/> S VAL=ORLST("DILIST","ID",1,1)<br/> S VAL=$P(VAL,"version ",2)<br/> S BADVAL=0<br/> I $P(VAL,".",1)="" S BADVAL=1<br/> I $P(VAL,".",2)="" S BADVAL=1<br/> I $P(VAL,".",3)="" S BADVAL=1<br/> I $P(VAL,".",4)="" S BADVAL=1<br/> I ((BADVAL)!('VAL)!(VAL="")) S VAL="0.0.0.0"</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMisc.pas">rMisc.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}