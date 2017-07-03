---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VEJDWPB GET VISITS APPOINTMENT
# VEJDWPB GET VISITS APPOINTMENT

This will call the VEJDWPB GET SCHED APPTS rpc to get the scheduledappointments for the user inputted date range. It then loops throughs the Visit file (#9000010) "AA" cross reference tofind all visits. It then uses the uses the IN5^VADPT to get the current admission.It then uses the uses the IN5^VADPT to get the current admission.

Property | Value
--- | ---
Label | VSIT
Routine | [VEJDVST2](http://code.osehra.org/dox/Routine_VEJDVST2_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL |  | true |  DATA - required - DFN ^ BEG ^ END ^ ZLOC ^ FLG ^ MODS ^ CAT  DFN - required - pointer to file 2  BEG - optional - starting Fileman date/time  END - optional - ending fileman date/time - default &#x3D; DT+.5 ALOC - optional - clinic, either name or file 44 ien retained for                   backwards compatibility  FLG - optional - type of appts to return        0 - active/kept appts (past) - default        1 - future appts only        2 - both past and future appts MODS - optional - string of codes determine which encounters to return                   default value &#x3D; ASV                   MODS[&quot;A&quot; - return current admission regardless of date                   MODS[&quot;S&quot; - return schedule appts                   MODS[&quot;V&quot; - return visit file entries (#9000010)  CAT - optional - default value is 0 screen visits by service category        1 - return all visits        0 or &lt;null&gt; - do not return historical type visits        I $G(CAT) then do not screen visit entries by service category        I &#x27;$G(CAT) then screen out historical visits (E,D,X,N,C)
VECLIN | LIST |  | true |  VECLIN is a local array which contains a list of clinics to be used to screen appointment list.  Only those appointments in these clinics will be returned.    VECLIN - optional - passed by reference    VECLIN(#) &#x3D; clinic name or ien
SCODE | LIST |  | true |  This is a list of 3-digit stop codes used to screen appointments returned.  Only those clinic locations whose stop code is in this list will be returned.     SCODE - optional - passed by reference    SCODE(#) &#x3D; 3-digit stop code (lookup on C xref)
VEDIV | LIST |  | true |  This is a list of divisions to be used to screen appointments.  Only appointments in clinics for divisions in this list will be returned.      VEDIV - optional - passed by reference     VEDIV(#) &#x3D; division name or ien



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}