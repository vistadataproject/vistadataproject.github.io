---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VBECS BLOOD BANK USER LOOKUP 

 property | value 
--- | --- 
 label | VBECS BLOOD BANK USER LOOKUP
 tag | BBUSER
 routine | [VBECRPCM](http://code.osehra.org/dox/Routine_VBECRPCM_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns XML containing a list of users from the New Person file#200 that hold the Security Keys associated with Blood Bank. XML Mapping:count attribute =        Number of records founduserName attribute =     NEW PERSON file (#200) / NAME field (#.01)userDuz attribute =      NEW PERSON file (#200) / IEN field (#.001)userInitials attribute = NEW PERSON file (#200) / INITIAL field (#1)divisionCode attribute = INSTITUTION file (#4) / STATION NUMBER field (#99) XML Example:<BloodBankUsers>    <Record count=\1\>        <BloodBankUser userName=\BLOODBANK,USER\ userDUZ=\5000\ userInitials=\BBU\>            <Divisions>                <Division divisionCode=\589\ />                <Division divisionCode=\589A4\ />                <Division divisionCode=\589A5\ />                <Division divisionCode=\589A6\ />                <Division divisionCode=\589A7\ />            </Divisions>        </BloodBankUser>    </Record></BloodBankUsers>




Generated on January 11th 2017, 6:34:23 am