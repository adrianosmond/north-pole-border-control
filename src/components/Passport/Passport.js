import Photo from 'components/Photo';

const Passport = ({
  byr = '-',
  iyr = '-',
  eyr = '-',
  hgt = '-',
  hcl = '-',
  ecl = '-',
  pid = '-',
  cid = '',
  name,
  country,
  approved,
}) => (
  <div className="w-full max-w-xl bg-yellow-50 p-6 pt-4 text-gray-900 relative">
    {approved && (
      <p
        className="inline-block text-2xl absolute top-1/2 left-1/2 font-mono uppercase py-2 px-4 border-4 border-green-600 rounded-full text-green-600"
        style={{ transform: 'rotate(-25deg)' }}
      >
        Approved
      </p>
    )}
    {approved === false && (
      <p
        className="inline-block text-2xl absolute top-1/2 left-1/2 font-mono uppercase py-2 px-4 border-4 border-red-700 rounded-full text-red-700"
        style={{ transform: 'rotate(25deg)' }}
      >
        Denied
      </p>
    )}
    <div className="mb-6 text-blue-900 text-xl text-center font-serif font-bold uppercase">
      {cid ? country : 'North Pole'}
    </div>
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-1 flex justify-center">
        <div className="bg-blue-200 w-32 h-40 relative overflow-hidden">
          <Photo ecl={ecl} hcl={hcl} name={name} />
        </div>
      </div>
      <dl className="grid gap-2 grid-cols-6 col-span-2">
        <div className="col-span-6">
          <dt className="text-xs font-semibold text-blue-900">Name</dt>
          <dd className="font-mono">{name}</dd>
        </div>
        <div className="col-span-3">
          <dt className="text-xs font-semibold text-blue-900">Year of Birth</dt>
          <dd className="font-mono">{byr}</dd>
        </div>
        <div className="col-span-3">
          <dt className="text-xs font-semibold text-blue-900">Height</dt>
          <dd className="font-mono">{hgt}</dd>
        </div>
        <div className="col-span-3 mb-4">
          <dt className="text-xs font-semibold text-blue-900">Hair colour</dt>
          <dd className="font-mono uppercase">{hcl}</dd>
        </div>
        <div className="col-span-3 mb-4">
          <dt className="text-xs font-semibold text-blue-900">Eye colour</dt>
          <dd className="font-mono uppercase">{ecl}</dd>
        </div>
        <div className="col-span-3 mb-4">
          <dt className="text-xs font-semibold text-blue-900">Year of Issue</dt>
          <dd className="font-mono">{iyr}</dd>
        </div>
        <div className="col-span-3 mb-4">
          <dt className="text-xs font-semibold text-blue-900">
            Year of Expiration
          </dt>
          <dd className="font-mono">{eyr}</dd>
        </div>
        <div className="col-span-3">
          <dt className="text-xs font-semibold text-blue-900">Passport ID</dt>
          <dd className="font-mono">{pid}</dd>
        </div>
        {cid && (
          <div className="col-span-3">
            <dt className="text-xs font-semibold text-blue-900">Country ID</dt>
            <dd className="font-mono">{cid}</dd>
          </div>
        )}
      </dl>
    </div>
  </div>
);

export default Passport;
