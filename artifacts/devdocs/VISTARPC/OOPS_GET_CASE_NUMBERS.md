---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS GET CASE NUMBERS
# OOPS GET CASE NUMBERS

This call returns a list of cases that match the search criteria and are eligible for editing.

Property | Value
--- | ---
Label | GETCASE
Routine | [OOPSGUI0](http://code.osehra.org/dox/Routine_OOPSGUI0_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PERSON | LITERAL |  |  | The value passed in PERSON determines which cases are included in thelookup.  A single Person can be returned or a listing of all cases for aparticular Supervisor or Secondary Supervisor.  If a listing by Supervisor isdesired the Supervisor&#x27;s DUZ must be passed in.  The format is:  PERSON &#x3D; 0^  (all cases included)           1^PERSON INVOLVED name           2^SUP / SEC SUP DUZ
CSTAT | LITERAL |  |  | This parameter passes in the Case Status&#x27;s of the claims to be included in thelookup criteria.  This parameter must be set programatically as there is not amechanism for user input.  Typically, this would be set to only allow Opencases to be included, with few exceptions.  The expected format is:  CSTAT &#x3D; #^#^#^#^   where each number is defined below          99^        all case status should be included           0^        open cases           1^        closed cases           2^        deleted cases           3^        replaced by amendment
PSTAT | LITERAL |  |  | This parameter determines which PERSONNEL STATUS&#x27;s should be included in thelookup criteria.  This parameter is determined by the user and the format isas follows:  PSTAT &#x3D; #^#^#^#^#^    for every Personnel Status          0^            all personnel status&#x27;s should be included          1^            employee          2^            volunteer          3^            contractor          4^            visitor          5^            other          6^            non-paid employee          7^            medical student          8^            nursing student          9^            other student         10^            resident physician
CALL | LITERAL |  |  | This parameter passes in the menu that the broker call was made from.  CALL &#x3D; E  employee menu         S  supervisor menu         H  employee health menu         O  safety officer menu         W  workers comp menu         U  union menu
OPT | LITERAL |  |  | This parameter passes in the option that the broker call was made from, ifneeded.  It is required to determine which fields should be availble for editing in the CA1, CA2, and 2162 forms.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}