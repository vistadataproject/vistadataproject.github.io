---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; LA UI PROVIDER CONTACT INFO<br/>
# LA UI PROVIDER CONTACT INFO

Contains the list of which contact info for the ordering provider to send in a Lab HL7 Order message from the user&#x27;s corresponding entry in NEW PERSON file (#200). It can be specified at the system or the individual user level. Ifspecified at the user level it takes precedence and overrides the settingat the system level allowing specific users to have their own specific setof contacts to send. The sequence specifies the order and info to check, maximum of 6 allowed.Only the first 2 with a value will be placed in the message as the HL7standard constrains the number of repetitions for this information at 2. The value specifies which field from the person&#x27;s entry in NEW PERSON file (#200) to send in the message. These are the fields currently available. Field #   Field Name       Description .131      PHONE (HOME)     This is the telephone number for the new                           person. .132      OFFICE PHONE     This is the business/office telephone for the                           new person. .133      PHONE #3         This is an alternate telephone number where the                           new person might also be reached.   .134      PHONE #4         This is another alternate telephone number                           where the new person might also be reached. .135     COMMERCIAL PHONE  This is a commercial phone number. .136     FAX NUMBER        This field holds a phone number for a FAX                            machine for this user. It needs to be a format                           that can be understood by a sending MODEM. .137      VOICE PAGER      This field holds a phone number for an ANALOG                           PAGER that this person carries with them. .138      DIGITAL PAGER    This field holds a phone number for a DIGITAL                           PAGER that this person carries with them.  The parameter is distributed pre-configured at the package level as follows:  Sequence  Value --------  ----- 1         OFFICE PHONE 2         DIGITAL PAGER 3         VOICE PAGER 4         PHONE #3 5         PHONE #4 6         PHONE (HOME) 7         COMMERICAL PHONE 8         FAX NUMBER

## Properties

Property | Value
--- | ---
Summary | Lab Ordering Provider Contact Info
Value Type | set of codes
Value Domain | 1:PHONE (HOME);2:OFFICE PHONE;3:PHONE #3;4:PHONE #4;5:COMMERICAL;6:FAX;7:VOICE PAGER;8:DIGITAL PAGER
Multiple Instances | true

## Allowable Entities

Precedence | Entity
--- | ---
1 | USER
2 | SYSTEM
3 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}