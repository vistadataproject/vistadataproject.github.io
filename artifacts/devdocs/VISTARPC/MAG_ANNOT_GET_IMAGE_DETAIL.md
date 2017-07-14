---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG ANNOT GET IMAGE DETAIL<br/>
# MAG ANNOT GET IMAGE DETAIL

 Per VHA Directive 2004-038, this should not be modified.+---------------------------------------------------------------+| Property of the US Government.                                || No permission to copy or redistribute this software is given. || Use of unreleased versions of this software requires the user || to execute a written test agreement with the VistA Imaging    || Development Office of the Department of Veterans Affairs,     || telephone (301) 734-0100.                                     || The Food and Drug Administration classifies this software as  || a medical device.  As such, it may not be changed in any way. || Modifications to this software may result in an adulterated   || medical device under 21CFR820, the use of which is considered || to be a violation of US Federal Statutes.                     |+---------------------------------------------------------------+RETURNS THE DETAIL OF IMAGE ANNOTATIONSGETD(MAGOUT,MAGIEN,LAYIEN) ; .MAGOUT       Reference to a local variable where the results are returned to. ; .MAGIEN       Internal entry number of IMAGE file been annotated ; .LAYIEN       Internal entry number of ANNOTATION IMAGE LAYER in #2005.002Return Values=============    If MAGOUT(0) is defined and its 1st '^'-piece is 0, then an erroroccurred during execution of the procedure. 0 ^ 0 ^ error messageMAGOUT(0) = 1 ^ total count  lines counter of the returned arrayMAGOUT(1) = LAYER ID ^ ANNOTATOR ^ SAVED DATE/TIME ^ ANNOTATION VERSION ^ SOURCE ^ DELETION ^ TIU COMPLETION            ^ SERVICE/SECTION  ^ SITE# ^ DUZMAGOUT(n+1) = XML data line(s)

## Properties

Property | Value
--- | ---
Label | GETD
Routine | [MAGSANNO](http://code.osehra.org/dox/Routine_MAGSANNO_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGIEN | LITERAL | 30 | true | Internal entry number of IMAGE file been annotated (#2005)
LAYIEN | LITERAL | 10 |  | Internal entry number of ANNOTATION IMAGE LAYER in #2005.002 saved layer(s)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}