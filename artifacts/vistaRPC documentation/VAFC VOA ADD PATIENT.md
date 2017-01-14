---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; VAFC VOA ADD PATIENT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}VAFC VOA ADD PATIENT{:/}
 tag | {::nomarkdown}ADD{:/}
 routine | [VAFCPTAD](http://code.osehra.org/dox/Routine_VAFCPTAD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure Call allows the remote creation of a VistAPATIENT (#2) record at the Preferred Facility for the VeteranOn-Line Application (VOA) project.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAM{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}2000{:/} | {::nomarkdown}true{:/} | {::nomarkdown}PARAM may contain the following values: (R) Required (O) OptionalThe values are passed into this RPC from the Master Patient Index (MPI) via the MPI PSIM ADD PREF FACILITY Remote Procedure.  If internal formatvalues are sent, they are converted to the external value for the UPDATE^DIE call.          (R) PARAM(\PRFCLTY\) = Preferred Facility Station Number.  Must be                             the same as the receiving site.     (R) PARAM(\NAME\) = Last Name^First Name^Middle Name^Suffix is                         converted to: Last Name<comma>First Name<space>                         Middle Name<space>Suffix                         NAME of the applicant to be added to the PATIENT                         (#2) file.     (R) PARAM(\GENDER\) = External format - MALE or FEMALE                           SEX of the applicant to be added to the PATIENT                           (#2) file.     (R) PARAM(\DOB\) = External date format; can be imprecise. Month                        and/or day alone, without year is not allowed.                        DATE OF BIRTH of the applicant to be added to the                        PATIENT (#2) file.     (R) PARAM(\SSN\) = Format: nine numbers / no dashes, or a NULL value.                        If SSN is sent with a null value, then on the                        VistA side, the patient is given a PSEUDO SSN                        number and the PSEUDO SSN REASON field is also set                        to \SSN UNKNOWN/FOLLOW-UP REQUIRED\.  SOCIAL                        SECURITY NUMBER of the applicant to be added to                        the PATIENT (#2) file.     (R) PARAM(\SRVCNCTD\) = YES or NO                             Is the applicant to be added to the PATIENT                             (#2) file SERVICE CONNECTED?     (R) PARAM(\TYPE\) = Primary patient TYPE:                         ACTIVE DUTY,                         ALLIED VETERAN,                         COLLATERAL,                         EMPLOYEE,                         MILITARY RETIREE,                         NON-VETERAN (OTHER),                         NSC VETERAN,                         SC VETERAN, OR                         TRICARE                         Primary patient TYPE of the applicant to be added                         to the PATIENT (#2) file.     (R) PARAM(\VET\) = YES or NO                        Is the applicant to be added to the PATIENT (#2)                        file a VETERAN?     (R) PARAM(\FULLICN \) = A 10 digit NUMBER, followed by V (delimiter),                             followed by a 6 digit CHECKSUM NUMBER.                             The full INTEGRATION CONTROL NUMBER (ICN)                             of the applicant to be added to the PATIENT                             (#2) file.              (O) PARAM(\POBCTY\) = City name.  PLACE OF BIRTH [CITY] of the                            applicant to be added to the PATIENT (#2) file.     (O) PARAM(\POBST\) = The incoming 2 character STATE ABBREVIATION                          is converted to the STATE NAME.  PLACE OF                          BIRTH [STATE] of the applicant to be added                          to the PATIENT (#2) file.     (O) PARAM(\MMN\) = MOTHER'S MAIDEN NAME.  Maiden name of the mother                        of the applicant to be added to the PATIENT (#2)                         file.     (O) PARAM(\MBI\) = MULTIPLE BIRTH INDICATOR. Y or N     (O) PARAM(\ALIAS\,#) = ALIAS NAME (Last Name^First Name^Middle                            Name^Suffix) is converted to: (Last Name                            <comma>First Name<space>Middle Name<space>                            Suffix)^ALIAS SSN                            The # subscript is a sequential number.{:/} | 




 Generated on January 14th 2017, 7:26:36 am