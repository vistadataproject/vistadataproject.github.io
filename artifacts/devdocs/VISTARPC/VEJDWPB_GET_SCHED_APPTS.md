---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VEJDWPB GET SCHED APPTS<br/>
# VEJDWPB GET SCHED APPTS

This will invoke SDA^VADPT.  It returns those appointments which were keptand all open future appointments depending upon the date range.

## Properties

Property | Value
--- | ---
Label | APPT
Routine | [VEJDVST1](http://code.osehra.org/dox/Routine_VEJDVST1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 90 | true | DATA &#x3D; DFN ^ BEG ^ END ^ ALOC ^ FLG where  DFN &#x3D; required - pointer to patient file (#2) BEG &#x3D; optional - FM date/time - return all scheduled appointments       greater than BEG END &#x3D; optional - FM date/time - return all scheduled appointments       up to ENDALOC &#x3D; optional - name of location (file 44) or pointer to file 44       If present, then only appointments for that clinic returned FLG &#x3D; optional       0 - return all kept appts from BEG to today       1 - return future appts only       2 - return appts from 0 &amp; 1 Date range takes precedence over FLG.  So if you send BEG&#x3D;DT-1,FLG&#x3D;1 youwill get no appointments since BEG not greater than NOW
VECLIN | LIST |  | true | VECLIN is a local array which contains a list of clinics to be used to screen appointment list.  Only those appointments in these clinics will be returned.   VECLIN - optional - passed by reference   VECLIN(#) &#x3D; clinic name or ien
SCODE | LIST |  | true | This is a list of 3-digit stop codes used to screen appointments returned.  Only those clinic locations whose stop code is in this list will be returned.    SCODE - optional - passed by reference   SCODE(#) &#x3D; 3-digit stop code (lookup on C xref)
VEDIV | LIST |  | true | This is a list of divisions to be used to screen appointments.  Only appointments in clinics for divisions in this list will be returned.     VEDIV - optional - passed by reference    VEDIV(#) &#x3D; division name or ien



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}