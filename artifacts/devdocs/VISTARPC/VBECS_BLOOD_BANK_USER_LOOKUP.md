---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VBECS BLOOD BANK USER LOOKUP
# VBECS BLOOD BANK USER LOOKUP

This RPC returns XML containing a list of users from the New Person file#200 that hold the Security Keys associated with Blood Bank. XML Mapping:count attribute =        Number of records founduserName attribute =     NEW PERSON file (#200) / NAME field (#.01)userDuz attribute =      NEW PERSON file (#200) / IEN field (#.001)userInitials attribute = NEW PERSON file (#200) / INITIAL field (#1)divisionCode attribute = INSTITUTION file (#4) / STATION NUMBER field (#99) XML Example:<BloodBankUsers>    <Record count="1">        <BloodBankUser userName="BLOODBANK,USER" userDUZ="5000" userInitials="BBU">            <Divisions>                <Division divisionCode="589" />                <Division divisionCode="589A4" />                <Division divisionCode="589A5" />                <Division divisionCode="589A6" />                <Division divisionCode="589A7" />            </Divisions>        </BloodBankUser>    </Record></BloodBankUsers>

Property | Value
--- | ---
Label | BBUSER
Routine | [VBECRPCM](http://code.osehra.org/dox/Routine_VBECRPCM_source.html)
Return Type | GLOBAL ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}