---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC GET SCHED APPTS<br/>
# DSIC GET SCHED APPTS

This will invoke SDA^VADPT.  It returns those appointments which were keptand all open future appointments depending upon the date range.

## Properties

Property | Value
--- | ---
Label | APPT
Routine | [DSICVT0](http://code.osehra.org/dox/Routine_DSICVT0_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 90 | true | DATA &#x3D; DFN ^ BEG ^ END ^ ALOC ^ FLG where  DFN &#x3D; required - pointer to patient file (#2) BEG &#x3D; optional - FM date/time - return all scheduled appointments       greater than BEG END &#x3D; optional - FM date/time - return all scheduled appointments       up to ENDALOC &#x3D; optional - name of location (file 44) or pointer to file 44       If present, then only appointments for that clinic returned FLG &#x3D; optional       0 - return all kept appts from BEG to today       1 - return future appts only       2 - return appts from 0 &amp; 1 Date range takes precedence over FLG.  So if you send BEG&#x3D;DT-1,FLG&#x3D;1 youwill get no appointments since BEG not greater than NOW
SCR | LIST | 100 | true | SCR - optional - added 7/3/2002 - sgm      passed by reference      format:  SCR(subscript) &#x3D; code ^ value   where               code &#x3D; C for hospital location #44                      D for medical center division #40.8                      S for 3-digit stop code from file 40.7 (not ien)               value &#x3D; for codes C,D - any unique lookup value or ien                       for code S - 3-digit stop code (not ien to 40.7)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}