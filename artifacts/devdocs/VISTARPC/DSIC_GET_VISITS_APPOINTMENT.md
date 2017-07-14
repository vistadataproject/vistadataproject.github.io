---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC GET VISITS APPOINTMENT<br/>
# DSIC GET VISITS APPOINTMENT

This will call the DSIC GET SCHED APPTS rpc to get the scheduledappointments for the user inputted date range.  It uses SELECTED^VSIT to find all visits.  It uses IN5^VADPT to get the current admission.  It will also get historical admission data, but manipulate the hospital location pointer values to the Visit LOCATION (#9999999.06) file,that points to the INSTITUTION (#4) file.

## Properties

Property | Value
--- | ---
Label | VSIT
Routine | [DSICVT0](http://code.osehra.org/dox/Routine_DSICVT0_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL |  | true |  DATA - required - DFN ^ BEG ^ END ^ ZLOC ^ FLG ^ MODS ^ CAT  DFN - required - pointer to file 2  BEG - optional - starting Fileman date/time  END - optional - ending fileman date/time - default &#x3D; DT+.5 ZLOC - optional - clinic, either name or file 44 ien retained for                   backwards compatibility  FLG - optional - type of appts to return        0 - active/kept appts (past) - default        1 - future appts only        2 - both past and future appts MODS - optional - string of codes determine which encounters to return                   default value &#x3D; ASV                   MODS[&quot;A&quot; - return current admission regardless of date                   MODS[&quot;S&quot; - return schedule appts                   MODS[&quot;V&quot; - return visit file entries (#9000010)  CAT - optional - default value is 0 screen visits by service category        1 - return all visits        0 or &lt;null&gt; - do not return historical type visits
SCR | LIST | 250 | true | SCR - optional - added 7/3/2002 - sgm      passed by reference      format:  SCR(subscript) &#x3D; code ^ value   where               code &#x3D; C for hospital location #44                      D for medical center division #40.8                      S for 3-digit stop code from file 40.7 (not ien)               value &#x3D; for codes C,D - any unique lookup value or ien                       for code S - 3-digit stop code (not ien to 40.7)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}