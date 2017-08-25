---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VAFC VOA ADD PATIENT<br/>
# VAFC VOA ADD PATIENT

This Remote Procedure Call allows the remote creation of a VistAPATIENT (#2) record at the Preferred Facility for the VeteranOn-Line Application (VOA) project.

## Properties

Property | Value
--- | ---
Label | ADD
MUMPS Implementation | [VAFCPTAD](http://code.osehra.org/dox/Routine_VAFCPTAD_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM | LIST | 2000 | true | PARAM may contain the following values: (R) Required (O) OptionalThe values are passed into this RPC from the Master Patient Index (MPI) via the MPI PSIM ADD PREF FACILITY Remote Procedure.  If internal formatvalues are sent, they are converted to the external value for the UPDATE^DIE call.          (R) PARAM(&quot;PRFCLTY&quot;) &#x3D; Preferred Facility Station Number.  Must be                             the same as the receiving site.     (R) PARAM(&quot;NAME&quot;) &#x3D; Last Name^First Name^Middle Name^Suffix is                         converted to: Last Name&lt;comma&gt;First Name&lt;space&gt;                         Middle Name&lt;space&gt;Suffix                         NAME of the applicant to be added to the PATIENT                         (#2) file.     (R) PARAM(&quot;GENDER&quot;) &#x3D; External format - MALE or FEMALE                           SEX of the applicant to be added to the PATIENT                           (#2) file.     (R) PARAM(&quot;DOB&quot;) &#x3D; External date format; can be imprecise. Month                        and/or day alone, without year is not allowed.                        DATE OF BIRTH of the applicant to be added to the                        PATIENT (#2) file.     (R) PARAM(&quot;SSN&quot;) &#x3D; Format: nine numbers / no dashes, or a NULL value.                        If SSN is sent with a null value, then on the                        VistA side, the patient is given a PSEUDO SSN                        number and the PSEUDO SSN REASON field is also set                        to &quot;SSN UNKNOWN/FOLLOW-UP REQUIRED&quot;.  SOCIAL                        SECURITY NUMBER of the applicant to be added to                        the PATIENT (#2) file.     (R) PARAM(&quot;SRVCNCTD&quot;) &#x3D; YES or NO                             Is the applicant to be added to the PATIENT                             (#2) file SERVICE CONNECTED?     (R) PARAM(&quot;TYPE&quot;) &#x3D; Primary patient TYPE:                         ACTIVE DUTY,                         ALLIED VETERAN,                         COLLATERAL,                         EMPLOYEE,                         MILITARY RETIREE,                         NON-VETERAN (OTHER),                         NSC VETERAN,                         SC VETERAN, OR                         TRICARE                         Primary patient TYPE of the applicant to be added                         to the PATIENT (#2) file.     (R) PARAM(&quot;VET&quot;) &#x3D; YES or NO                        Is the applicant to be added to the PATIENT (#2)                        file a VETERAN?     (R) PARAM(&quot;FULLICN &quot;) &#x3D; A 10 digit NUMBER, followed by V (delimiter),                             followed by a 6 digit CHECKSUM NUMBER.                             The full INTEGRATION CONTROL NUMBER (ICN)                             of the applicant to be added to the PATIENT                             (#2) file.              (O) PARAM(&quot;POBCTY&quot;) &#x3D; City name.  PLACE OF BIRTH [CITY] of the                            applicant to be added to the PATIENT (#2) file.     (O) PARAM(&quot;POBST&quot;) &#x3D; The incoming 2 character STATE ABBREVIATION                          is converted to the STATE NAME.  PLACE OF                          BIRTH [STATE] of the applicant to be added                          to the PATIENT (#2) file.     (O) PARAM(&quot;MMN&quot;) &#x3D; MOTHER&#x27;S MAIDEN NAME.  Maiden name of the mother                        of the applicant to be added to the PATIENT (#2)                         file.     (O) PARAM(&quot;MBI&quot;) &#x3D; MULTIPLE BIRTH INDICATOR. Y or N     (O) PARAM(&quot;ALIAS&quot;,#) &#x3D; ALIAS NAME (Last Name^First Name^Middle                            Name^Suffix) is converted to: (Last Name                            &lt;comma&gt;First Name&lt;space&gt;Middle Name&lt;space&gt;                            Suffix)^ALIAS SSN                            The # subscript is a sequential number.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}