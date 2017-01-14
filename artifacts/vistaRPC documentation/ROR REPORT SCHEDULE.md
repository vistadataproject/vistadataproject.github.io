---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ROR REPORT SCHEDULE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ROR REPORT SCHEDULE{:/}
 tag | {::nomarkdown}SCHEDREP{:/}
 routine | [RORRP010](http://code.osehra.org/dox/Routine_RORRP010_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Schedules the report and returns the task information.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REGIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Registry IEN (if $G(REGIEN)'>0 the task will not be associated with anyparticular registry).{:/} | 
| {::nomarkdown}RPTCODE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Code of the report (value of the CODE field of the report descriptor inthe ROR REPORT file).{:/} | 
| {::nomarkdown}ZTDTH{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date/time to start the task (external value). By default (if $G(ZDTH)=\\),the task will be scheduled to run after 3-second pause.{:/} | 
| {::nomarkdown}PARAMS{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Report parameters in XML format. For example:   with RPCBroker.Param[4] do    begin      PType :=list;      Mult[1] := '<?xml version=\1.0\ encoding=\UTF-8\?>'      Mult[2] := '<PARAMS>';      Mult[3] := '<TASK_COMMENT>Ear procedures 2003</TASK_COMMENT>'      Mult[4] := '<DATE_RANGE TYPE=\YEAR\ YEAR=\2003\/>';      Mult[5] := '<PATIENTS DE_DURING=\1\ INPATIENT=\1\ OUTPATIENT=\1\>';      Mult[6] := '<CPTLST>';      Mult[7] := '<CPT ID=\00120\>ANESTH, EAR SURGERY</CPT>';      Mult[8] := '<CPT ID=\00124\>ANESTH, EAR EXAM</CPT>';      Mult[9] := '</CPTLST>';      ...      Mult[n] := '</PARAMS>';    end; Clinics-------   <CLINICS [ALL=\1\]>    <CLINIC ID=\IEN\>Name</CLINIC>    ...  </CLINICS> CPT Codes---------   <CPTLST [ALL=\1\]>    <CPT ID=\CPT\>Name</CPT>    ...  </CPTLST> Date Range----------(Medications date range for the Combined Meds and Labs report)   <DATE_RANGE TYPE=\Type\ [START=\...\ END=\...\]    [CUTOFF=\...\] [YEAR=\...\ [QUARTER=\...\]    [FISCAL=\1\]]/> Lab Date Range--------------   <DATE_RANGE_2 TYPE=\Type\ [START=\...\ END=\...\]    [CUTOFF=\...\] [YEAR=\...\ [QUARTER=\...\]    [FISCAL=\1\]]/> Utilization Date Range----------------------   <DATE_RANGE_3 TYPE=\Type\ [START=\...\ END=\...\]    [CUTOFF=\...\] [YEAR=\...\ [QUARTER=\...\]    [FISCAL=\1\]]/> Divisions---------   <DIVISIONS [ALL=\1\]>    <DIV ID=\IEN\>Name</DIV>    ...  </DIVISIONS> Medications, Drug Classes, and Medication Groups------------------------------------------------   <DRUGS [AGGR_GENERIC=1] [AGGR_FORMUL=1] [ALL=\1\]    [INVESTIG=\1\] [REGMEDS=\1\]>    <GROUP [ID=\GroupName\] [INVESTIG=\1\] [REGMEDS=\1\]>      <GENERIC>        <DRUG ID=\IEN\>Name</DRUG>        ...      </GENERIC>      <FORMULATIONS>        <DRUG ID=\IEN\>Name</DRUG>        ...      </FORMULATIONS>      <VARXCLS>        <VARXCL ID=\IEN\ CODE=\ClassCode\>Name</VARXCL>        ...      </VARXCLS>    </GROUP>    ...  </DRUGS> ICD Codes-----------   <ICDLST [ALL=\1\]>    <GROUP ID=\Group Name\>      <ICD ID=\ICD Code\ VERSION=\ICD-9/ICD-10\>Name</ICD>      ...    </GROUP>  </ICDLST>   <ICDFILT FILTER=\ALL/INCLUDE/EXCLUDE\>    <GROUP ID=\Group Name\>      <ICD ID=\ICD Code\ VERSION=\ICD-9/ICD-10\>Name</ICD>      ...    </GROUP>  </ICDFILT> Lab Tests---------   <LABTESTS [ALL=\1\]>    <LT ID=\IEN\ [LOW=\...\] [HIGH=\...\]>Name</LT>    ...  </LABTESTS> Local Fields------------   <LOCAL_FIELDS>    <FIELD ID=\IEN\ [MODE=\1\\-1\]       [NAME=\FieldName\]>Description</FIELD>  </LOCAL_FIELDS> Lab Result Ranges-----------------   <LRGRANGES>    <LRGRANGE ID=\GroupCode\ USE=\1\      [LOW=\...\] [HIGH=\...\]>GroupName</LRGRANGE>  </LRGRANGES> Number of patients with highest utilization-------------------------------------------   <MAXUTNUM>...</MAXUTNUM> Minimum number of procedures/results to display-----------------------------------------------   <MINRPNUM>...</MINRPNUM> Optional Columns----------------   <OPTIONAL_COLUMNS>    <COLUMN ID=\ColumnName\/>  </OPTIONAL_COLUMNS> Report Options--------------   <OPTIONS [COMPLETE=\1\] [SUMMARY=\1\]    [REGMEDSMRY=\1\] [PTLIST=\1\]/> Other Registries----------------   <OTHER_REGISTRIES>    <REGISTRY ID=\RegIEN\ [MODE=\1\\-1\]      [NAME=\RegName\]>Description</REGISTRY>    ...  </OTHER_REGISTRIES> Subset of Patients------------------   <PATIENTS [CONFIRMED=\1\] [PENDING=\1\]    [DE_BEFORE=\1\] [DE_DURING=\1\] [DE_AFTER=\1\]    [INPATIENT=\1\] [OUTPATIENT=\1\]    [COMPLEX=\1\] [BASIC=\1\]    [LAB=\1\] [NOLAB=\1\]     [NOTSEEN=\1\] [SEEN=\1\] [CAREONLY=\1\]    [PHARM=\1\] [NOPHARM=\1\]    [PROC=\1\] [NOPROC=\1\]/>    <PT ID=\DFN\ [SSN=\SSN\]>Name</PT>    ...  </PATIENTS> User Defined Comment--------------------   <TASK_COMMENT>...</TASK_COMMENT> Utilization Types-----------------   <UTIL_TYPES [ALL=\1\]>    <UT ID=\UtlCode\/>    ...  </UTIL_TYPES>   VADRUGCLS     VA drug classes included in the report                 Example:                  Mult['\VADRUGCLS(1)\'] := 'IN140';                  Mult['\VADRUGCLS(2)\'] := 'IN150';   VIRAL_LOAD    Viral Load options                  ^01: Include Viral Load (0/1)                  ^02: Use range          (0/1)                  ^03: Low                  ^04: High                 Example (include all):                  Mult['\VIRAL_LOAD\'] := '1';                 Example (use range):                  Mult['\VIRAL_LOAD\'] := '1^1^3000^100000';{:/} | 
| {::nomarkdown}SCHCODE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Rescheduling code (\1D\, \1M\, \D@12:00\, etc).{:/} | 




 Generated on January 14th 2017, 7:26:36 am