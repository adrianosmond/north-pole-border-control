const Welcome = () => (
  <div className="max-w-2xl mx-auto py-8 leading-relaxed">
    <h1 className="text-6xl">North Pole: Border Control</h1>
    <p className="mt-6">Press Space to start</p>
    <p className="mt-6">
      It's that time of year again, and people are flocking to the North Pole.
      This year seems more frantic than the others however, so the
      Administrative Officialdom Council (AOC) of the North Pole has decided to
      bring in new workers to help deal with the extra influx of people at the
      border. This is where you come in...
    </p>
    <p className="mt-6">
      The AOC wishes to let in all citizens from all countries who have valid
      passports. A valid passport should have:
    </p>
    <ul className="list-disc list-inside">
      <li className="mt-2">
        The year of birth of the carrier - four digits; at least 1920 and at
        most 2002.
      </li>
      <li className="mt-2">
        The height of the carrier in cm or in
        <ul className="list-disc list-inside ml-6">
          <li className="mt-2">
            If cm, the height must be at least 150 and at most 193.
          </li>
          <li className="mt-2">
            If in, the height must be at least 59 and at most 76.
          </li>
        </ul>
      </li>
      <li className="mt-2">
        The hair color of the carrier - a # followed by exactly six characters
        0-9 or A-F.
      </li>
      <li className="mt-2">
        The eye Color of the carrier - exactly one of: AMB, BLU, BRN, GRY, GRN,
        HZL, or OTH.
      </li>
      <li className="mt-2">
        The year of issue of the passport - four digits; at least 2010 and at
        most 2020.
      </li>
      <li className="mt-2">
        The year of expiration of the passport - four digits; at least 2020 and
        at most 2030.
      </li>
      <li className="mt-2">
        The Passport ID - a nine-digit number, including leading zeroes.
      </li>
    </ul>
    <p className="mt-2">
      A passport may also have a Country ID, but this is not mandatory
    </p>
    <p className="mt-6">
      You'll be paid $100 for every person you correctly approve or deny entry
      to the North Pole, but you'll be fined $500 for any incorrect decisions
      you make.
    </p>
  </div>
);

export default Welcome;
