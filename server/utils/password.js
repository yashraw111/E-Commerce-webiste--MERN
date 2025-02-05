const bcrypt =  require('bcryptjs')

exports.plainToHash = async(password)=>{
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
}

exports.hashToPlain = async(password, hashPassword)=>{
    return await bcrypt.compare(password, hashPassword)
}